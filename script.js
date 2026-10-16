/* 
 * Bài tập tuần: Thư viện ảnh tương tác (Interactive Photo Gallery)
 * Sinh viên thực hiện: [Tên của bạn]
 */

// Hàm được gọi khi rê chuột (hover) vào hình ảnh
function upDate(previewPic) {
    // 1. Kiểm tra sự kiện đã kích hoạt chưa
    console.log("Sự kiện upDate đã được kích hoạt thành công!");

    // 2. In các thông tin alt và src của biến previewPic ra Console
    console.log("Nội dung alt của ảnh:", previewPic.alt);
    console.log("Đường dẫn src của ảnh:", previewPic.src);

    // Lấy phần tử div hiển thị ảnh có id="image"
    var imageDiv = document.getElementById("image");

    // 3. Thay đổi nội dung văn bản thành thuộc tính alt của ảnh đang di chuột vào
    imageDiv.innerHTML = previewPic.alt;

    // 4. Thay đổi hình nền của khung thành ảnh đang di chuột vào
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm được gọi khi di chuột ra khỏi hình ảnh
function unDo() {
    // Lấy phần tử div hiển thị ảnh có id="image"
    var imageDiv = document.getElementById("image");

    // 1. Đặt lại hình nền trở về giá trị rỗng ban đầu
    imageDiv.style.backgroundImage = "url('')";

    // 2. Đặt lại nội dung văn bản ban đầu
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}