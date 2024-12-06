import pandas as pd
from sklearn.impute import KNNImputer
from sklearn.preprocessing import StandardScaler

# Đọc dữ liệu Titanic
df = pd.read_csv('titanic.csv')  # Thay thế 'titanic.csv' bằng đường dẫn file của bạn

# Hiển thị thông tin dữ liệu ban đầu
print("Dữ liệu ban đầu:")
print(df.isnull().sum())  # Kiểm tra số lượng giá trị thiếu

# Lựa chọn các cột liên quan để áp dụng KNNImputer (có thể loại bỏ cột không cần thiết)
features = ['Pclass', 'Sex', 'SibSp', 'Parch', 'Fare', 'Embarked']

# Chuyển cột 'Sex' và 'Embarked' thành số (vì KNNImputer không làm việc với dữ liệu dạng chuỗi)
df['Sex'] = df['Sex'].map({'male': 0, 'female': 1})
df = pd.get_dummies(df, columns=['Embarked'], drop_first=True)  # One-hot encoding cho Embarked

# Lấy dữ liệu chỉ có các cột số
X = df[features + ['Age']]

# Chuẩn hóa dữ liệu (quan trọng để KNN hoạt động hiệu quả)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Khởi tạo KNNImputer với k=5 (5 láng giềng gần nhất)
knn_imputer = KNNImputer(n_neighbors=5)

# Thực hiện điền giá trị thiếu trong cột 'Age'
X_imputed = knn_imputer.fit_transform(X_scaled)

# Cập nhật lại cột 'Age' trong dataframe ban đầu
df['Age'] = X_imputed[:, -1]

# Kiểm tra lại sau khi điền giá trị thiếu
print("\nDữ liệu sau khi điền giá trị thiếu:")
print(df.isnull().sum())

# Lưu lại kết quả vào file mới
df.to_csv('titanic_imputed.csv', index=False)

print("\nDữ liệu đã được lưu vào 'titanic_imputed.csv'")
