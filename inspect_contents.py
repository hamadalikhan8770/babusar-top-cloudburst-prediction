import joblib
from tensorflow.keras.models import load_model
from tensorflow.keras import backend as K
import tensorflow as tf

# replicate the custom loss used in training so model loads correctly

def focal_loss(gamma=2.0, alpha=0.5):
    def loss(y_true, y_pred):
        epsilon = K.epsilon()
        y_pred = K.clip(y_pred, epsilon, 1. - epsilon)
        pt = tf.where(tf.equal(y_true, 1), y_pred, 1 - y_pred)
        loss_val = -alpha * K.pow(1. - pt, gamma) * K.log(pt)
        return K.mean(loss_val)
    return loss


def inspect():
    # feature columns
    print("=== feature_cols.pkl ===")
    try:
        cols = joblib.load('feature_cols.pkl')
        print(f"{len(cols)} features:")
        for i, c in enumerate(cols, 1):
            print(f" {i:2d}. {c}")
    except Exception as e:
        print("failed to load feature_cols.pkl:", e)

    # scaler
    print("\n=== scaler_final.pkl ===")
    try:
        scaler = joblib.load('scaler_final.pkl')
        print(scaler)
        if hasattr(scaler, 'mean_'):
            print('mean_:', scaler.mean_)
            print('scale_:', scaler.scale_)
    except Exception as e:
        print("failed to load scaler_final.pkl:", e)

    # model
    print("\n=== cloudburst_final_bilstm_only.keras ===")
    try:
        model = load_model(
            'cloudburst_final_bilstm_only.keras',
            custom_objects={'focal_loss': focal_loss, 'loss': focal_loss()}
        )
        model.summary()
    except Exception as e:
        print("failed to load model:", e)


if __name__ == '__main__':
    inspect()
