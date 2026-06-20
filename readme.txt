Loading ERA5 data...
Loading TP data...
ERA5 shape: (701184, 15)
TP shape: (5465855, 4)
Pivoting pressure-level data...
Merged shape: (61998, 25)
Removed 0 duplicate rows.
Final shape after cleaning: (61998, 25)
Cloudburst threshold (mm/hr): 20.00 (based on 95th percentile)
Cloudburst events: 764 out of 61998 (1.23%)
Number of features: 26
Total sequences: 61984, Sequence shape: (6, 26)
Year 2014: 39 positives out of 2906 sequences (1.34%)
Year 2015: 55 positives out of 2920 sequences (1.88%)
Year 2016: 42 positives out of 2928 sequences (1.43%)
Year 2017: 48 positives out of 2920 sequences (1.64%)
Year 2020: 184 positives out of 12388 sequences (1.49%)
Year 2021: 221 positives out of 11698 sequences (1.89%)
Year 2022: 77 positives out of 13092 sequences (0.59%)
Year 2023: 98 positives out of 13132 sequences (0.75%)


Rolling windows:
Train years: [], Val years: [np.int32(2014), np.int32(2015)]
Train years: [2014, 2015], Val years: [np.int32(2016), np.int32(2017)]
Train years: [2014, 2015, 2016, 2017], Val years: [np.int32(2020)]
Train years: [2014, 2015, 2016, 2017, 2020], Val years: [np.int32(2021)]
Train years: [2014, 2015, 2016, 2017, 2020, 2021], Val years: [np.int32(2022)]
  3%|▎         | 1/30 [03:42<1:47:35, 222.60s/it]Trial 1: PR-AUC = 0.3534, best so far = 0.3534
  7%|▋         | 2/30 [12:39<3:10:06, 407.39s/it]Trial 2: PR-AUC = 0.3510, best so far = 0.3534
 10%|█         | 3/30 [27:09<4:38:28, 618.82s/it]Trial 3: PR-AUC = 0.3957, best so far = 0.3957
 13%|█▎        | 4/30 [31:42<3:28:56, 482.19s/it]Trial 4: PR-AUC = 0.3802, best so far = 0.3957
 17%|█▋        | 5/30 [36:38<2:52:53, 414.94s/it]Trial 5: PR-AUC = 0.3747, best so far = 0.3957
 20%|██        | 6/30 [47:51<3:21:05, 502.74s/it]Trial 6: PR-AUC = 0.3667, best so far = 0.3957
 23%|██▎       | 7/30 [51:54<2:40:09, 417.82s/it]Trial 7: PR-AUC = 0.3414, best so far = 0.3957
 27%|██▋       | 8/30 [57:13<2:21:41, 386.45s/it]Trial 8: PR-AUC = 0.3463, best so far = 0.3957
 30%|███       | 9/30 [1:01:00<1:57:47, 336.55s/it]Trial 9: PR-AUC = 0.4263, best so far = 0.4263
 33%|███▎      | 10/30 [1:06:39<1:52:26, 337.30s/it]Trial 10: PR-AUC = 0.4215, best so far = 0.4263
 37%|███▋      | 11/30 [1:11:27<1:42:02, 322.23s/it]Trial 11: PR-AUC = 0.4066, best so far = 0.4263
 40%|████      | 12/30 [1:22:24<2:07:12, 424.03s/it]Trial 12: PR-AUC = 0.3806, best so far = 0.4263
 43%|████▎     | 13/30 [1:29:49<2:01:55, 430.35s/it]Trial 13: PR-AUC = 0.4227, best so far = 0.4263
 47%|████▋     | 14/30 [1:36:02<1:50:10, 413.13s/it]Trial 14: PR-AUC = 0.4375, best so far = 0.4375
 50%|█████     | 15/30 [1:44:17<1:49:28, 437.88s/it]Trial 15: PR-AUC = 0.3685, best so far = 0.4375
 53%|█████▎    | 16/30 [1:46:55<1:22:27, 353.38s/it]Trial 16: PR-AUC = 0.3807, best so far = 0.4375
 57%|█████▋    | 17/30 [1:52:07<1:13:52, 340.94s/it]Trial 17: PR-AUC = 0.3776, best so far = 0.4375
 60%|██████    | 18/30 [1:56:58<1:05:13, 326.14s/it]Trial 18: PR-AUC = 0.3894, best so far = 0.4375
 63%|██████▎   | 19/30 [2:02:09<58:57, 321.60s/it]  Trial 19: PR-AUC = 0.3536, best so far = 0.4375
 67%|██████▋   | 20/30 [2:06:19<50:00, 300.00s/it]Trial 20: PR-AUC = 0.3325, best so far = 0.4375
 70%|███████   | 21/30 [2:11:36<45:45, 305.01s/it]Trial 21: PR-AUC = 0.3825, best so far = 0.4375
 73%|███████▎  | 22/30 [2:15:30<37:51, 283.89s/it]Trial 22: PR-AUC = 0.3905, best so far = 0.4375
 77%|███████▋  | 23/30 [2:18:33<29:33, 253.41s/it]Trial 23: PR-AUC = 0.3728, best so far = 0.4375
 80%|████████  | 24/30 [2:22:35<25:01, 250.24s/it]Trial 24: PR-AUC = 0.3977, best so far = 0.4375
 83%|████████▎ | 25/30 [2:25:59<19:40, 236.14s/it]Trial 25: PR-AUC = 0.4113, best so far = 0.4375
 87%|████████▋ | 26/30 [2:30:18<16:11, 242.97s/it]Trial 26: PR-AUC = 0.3693, best so far = 0.4375
 90%|█████████ | 27/30 [2:39:44<16:59, 339.96s/it]Trial 27: PR-AUC = 0.3873, best so far = 0.4375
 93%|█████████▎| 28/30 [2:42:53<09:49, 294.70s/it]Trial 28: PR-AUC = 0.4232, best so far = 0.4375
 97%|█████████▋| 29/30 [2:53:53<06:44, 404.35s/it]Trial 29: PR-AUC = 0.4055, best so far = 0.4375
100%|██████████| 30/30 [2:57:54<00:00, 355.83s/it]Trial 30: PR-AUC = 0.4105, best so far = 0.4375

Best hyperparameters:
conv_filters: 64
kernel_size: 3
second_conv: False
conv_filters2: 128
lstm_units: 128
dropout: 0.5
dense_units: 48
lr: 0.005
Best average validation PR-AUC: 0.4375

Model: "functional_120"
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┓
┃ Layer (type)                    ┃ Output Shape           ┃       Param # ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━┩
│ input_layer_120 (InputLayer)    │ (None, 6, 26)          │             0 │
├─────────────────────────────────┼────────────────────────┼───────────────┤
│ bidirectional_120               │ (None, 256)            │       158,720 │
│ (Bidirectional)                 │                        │               │
├─────────────────────────────────┼────────────────────────┼───────────────┤
│ dense_240 (Dense)               │ (None, 48)             │        12,336 │
├─────────────────────────────────┼────────────────────────┼───────────────┤
│ dropout_120 (Dropout)           │ (None, 48)             │             0 │
├─────────────────────────────────┼────────────────────────┼───────────────┤
│ dense_241 (Dense)               │ (None, 1)              │            49 │
└─────────────────────────────────┴────────────────────────┴───────────────┘
 Total params: 171,105 (668.38 KB)
 Trainable params: 171,105 (668.38 KB)
 Non-trainable params: 0 (0.00 B)
Epoch 1/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 22s 24ms/step - auc: 0.7984 - loss: 0.0205 - pr_auc: 0.1573
Epoch 2/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 20s 26ms/step - auc: 0.8600 - loss: 0.0120 - pr_auc: 0.2730
Epoch 3/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 19s 24ms/step - auc: 0.8680 - loss: 0.0112 - pr_auc: 0.2970
Epoch 4/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 22s 26ms/step - auc: 0.8557 - loss: 0.0126 - pr_auc: 0.2915
Epoch 5/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 18s 24ms/step - auc: 0.8496 - loss: 0.0119 - pr_auc: 0.2606
Epoch 6/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 22s 26ms/step - auc: 0.8500 - loss: 0.0114 - pr_auc: 0.3128
Epoch 7/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 19s 24ms/step - auc: 0.8741 - loss: 0.0113 - pr_auc: 0.3049
Epoch 8/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 20s 26ms/step - auc: 0.8600 - loss: 0.0118 - pr_auc: 0.2512
Epoch 9/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 19s 24ms/step - auc: 0.8704 - loss: 0.0124 - pr_auc: 0.3157
Epoch 10/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 19s 25ms/step - auc: 0.8666 - loss: 0.0117 - pr_auc: 0.3516
Epoch 11/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 18s 24ms/step - auc: 0.8560 - loss: 0.0127 - pr_auc: 0.2869
Epoch 12/50
764/764 ━━━━━━━━━━━━━━━━━━━━ 18s 24ms/step - auc: 0.8692 - loss: 0.0115 - pr_auc: 0.2970
411/411 ━━━━━━━━━━━━━━━━━━━━ 4s 10ms/step

Best threshold for F1-score on test set: 0.4845
Maximum F1-score on test set: 0.5520

========== FINAL TEST RESULTS (2023) ==========
Accuracy:  0.9924
Precision: 0.4918
Recall:    0.6122
F1 Score:  0.5455
ROC AUC:   0.9751
PR AUC:    0.3621
