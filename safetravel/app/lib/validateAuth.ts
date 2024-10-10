export const validateUsername = (username: string) => {
    // Kiểm tra độ dài từ 6 đến 255 ký tự
    return username.length >= 6 && username.length <= 255;
};


export const validatePassword = (password: string) => {
    // Kiểm tra độ dài từ 6 đến 255 ký tự
    const lengthValid = password.length >= 6 && password.length <= 255;

    // Kiểm tra có ít nhất 1 chữ cái viết hoa
    const hasUpperCase = /[A-Z]/.test(password);

    // Kiểm tra có ít nhất 1 chữ số
    const hasNumber = /\d/.test(password);

    // Kiểm tra có ít nhất 1 ký tự đặc biệt
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Trả về true nếu tất cả các điều kiện đều đúng
    return lengthValid && hasUpperCase && hasNumber && hasSymbol;
};





