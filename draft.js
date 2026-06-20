// Building payload logic to inject into index.html refresh()

async function fetchOpenMeteoFeatures() {
    const lat = 35.6; // Babusar Top
    const lon = 73.6;

    // We need: t_500, u_500, v_500, r_500, vv_500, etc.
    // Open-Meteo has temperature, relative_humidity, windspeed, winddirection
    // We compute u and v from windspeed/direction
    // vertical_velocity (vv) is usually unavailable in simple APIs; we default to 0.0
    // cape, tcwv, tcc are sometimes available, else default to 0.0

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,dewpoint_2m,surface_pressure,cloudcover,cape,temperature_500hPa,temperature_700hPa,temperature_850hPa,relativehumidity_500hPa,relativehumidity_700hPa,relativehumidity_850hPa,windspeed_500hPa,winddirection_500hPa,windspeed_700hPa,winddirection_700hPa,windspeed_850hPa,winddirection_850hPa&forecast_days=1`;

    const response = await fetch(url);
    const data = await response.json();
    const h = data.hourly;

    // Model expects 6 timesteps (features up to current hour)
    // Find current hour index
    const now = new Date();
    // Round to nearest hour
    now.setMinutes(0, 0, 0);
    const timeIso = now.toISOString().slice(0, 13) + ":00";

    // Find the index in "h.time" roughly matching now
    let currentIndex = h.time.findIndex(t => t.startsWith(timeIso));
    if (currentIndex === -1) currentIndex = 6; // fallback 
    if (currentIndex < 5) currentIndex = 5; // ensure we have 6 contiguous past hours

    const rows = [];

    for (let i = currentIndex - 5; i <= currentIndex; i++) {
        // Calculate U and V components from speed and direction
        const calcUV = (spd, dir) => {
            // angle in radians
            const rad = (270 - dir) * Math.PI / 180;
            return {
                u: spd * Math.cos(rad) * (1000 / 3600), // convert km/h to m/s roughly if needed
                v: spd * Math.sin(rad) * (1000 / 3600)
            };
        };

        const uv500 = calcUV(h.windspeed_500hPa[i], h.winddirection_500hPa[i]);
        const uv700 = calcUV(h.windspeed_700hPa[i], h.winddirection_700hPa[i]);
        const uv850 = calcUV(h.windspeed_850hPa[i], h.winddirection_850hPa[i]);

        // Match exact columns from `inspect_contents.py` (26 features total)
        const row = {
            'r_500': h.relativehumidity_500hPa[i] || 0.0,
            'r_700': h.relativehumidity_700hPa[i] || 0.0,
            'r_850': h.relativehumidity_850hPa[i] || 0.0,
            't_500': (h.temperature_500hPa[i] || 0.0) + 273.15, // K
            't_700': (h.temperature_700hPa[i] || 0.0) + 273.15,
            't_850': (h.temperature_850hPa[i] || 0.0) + 273.15,
            'u_500': uv500.u || 0.0,
            'u_700': uv700.u || 0.0,
            'u_850': uv850.u || 0.0,
            'v_500': uv500.v || 0.0,
            'v_700': uv700.v || 0.0,
            'v_850': uv850.v || 0.0,
            'vv_500': 0.0,
            'vv_700': 0.0,
            'vv_850': 0.0,
            't2m': (h.temperature_2m[i] || 0.0) + 273.15, // K
            'd2m': (h.dewpoint_2m[i] || 0.0) + 273.15, // K
            'sp': (h.surface_pressure[i] || 1013) * 100, // hPa to Pa
            'tcc': h.cloudcover[i] ? h.cloudcover[i] / 100 : 0.0, // 0-1
            'cape': h.cape[i] || 0.0,
            'tcwv': 0.0 // unavailable
            // Temporal mapping logic automatically handled by `app.py` in api_predict if absent
        };
        rows.push(row);
    }

    return rows;
}
