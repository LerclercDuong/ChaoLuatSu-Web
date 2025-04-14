import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section: Company Logos */}
      <div className={styles.logoSection}>
        <img src="https://via.placeholder.com/150x50?text=The+Wall+Street+Journal" alt="Tạp chí Phố Wall" />
        <img src="https://via.placeholder.com/150x50?text=The+Atlantic" alt="Đại Tây Dương" />
        <img src="https://via.placeholder.com/150x50?text=CNBC" alt="CNBC" />
        <img src="https://via.placeholder.com/150x50?text=Bloomberg+Law" alt="Luật Bloomberg" />
        <img src="https://via.placeholder.com/50x50?text=TC" alt="TC" />
      </div>

      {/* Main Content: Four Columns */}
      <div className={styles.columns}>
        {/* Column 1: ChaoLuatSu */}
        <div className={styles.column}>
          <h4>ChaoLuatSu</h4>
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Tài liệu pháp lý</a></li>
            <li><a href="#">Ký tài liệu</a></li>
            <li><a href="#">Nộp thuế</a></li>
            <li><a href="#">Thành lập doanh nghiệp</a></li>
            <li><a href="#">Hồ sơ doanh nghiệp</a></li>
            <li><a href="#">Tư vấn luật sư</a></li>
            <li><a href="#">Bảng giá</a></li>
            <li><a href="#">Tài nguyên pháp lý</a></li>
            <li><a href="#">Ứng dụng di động</a></li>
            <li><a href="#">Sơ đồ trang web</a></li>
            <li><a href="#">Thay đổi cài đặt</a></li>
          </ul>
        </div>

        {/* Column 2: Start a business */}
        <div className={styles.column}>
          <h4>Khởi sự kinh doanh</h4>
          <ul>
            <li><a href="#">Đăng ký công ty TNHH</a></li>
            <li><a href="#">Đăng ký công ty cổ phần</a></li>
            <li><a href="#">Đăng ký doanh nghiệp xã hội</a></li>
            <li><a href="#">Đăng ký tổ chức phi lợi nhuận</a></li>
            <li><a href="#">Thuê đại diện pháp lý</a></li>
            <li><a href="#">Tạo tên doanh nghiệp</a></li>
            <li><a href="#">Hồ sơ doanh nghiệp</a></li>
            <li><a href="#">Đăng ký nhãn hiệu</a></li>
            <li><a href="#">Đăng ký tên thương mại</a></li>
            <li><a href="#">Nộp báo cáo hàng năm</a></li>
            <li><a href="#">Nộp sửa đổi điều lệ</a></li>
            <li><a href="#">Nộp giải thể doanh nghiệp</a></li>
          </ul>
        </div>

        {/* Column 3: Work with us */}
        <div className={styles.column}>
          <h4>Hợp tác với chúng tôi</h4>
          <ul>
            <li><a href="#">Phúc lợi pháp lý nhóm</a></li>
            <li><a href="#">Tham gia mạng lưới luật sư</a></li>
            <li><a href="#">Hợp tác cùng chúng tôi</a></li>
            <li><a href="#">Truy cập API của chúng tôi</a></li>
            <li><a href="#">Tuyển dụng</a></li>
          </ul>
        </div>

        {/* Column 4: Assistance */}
        <div className={styles.column}>
          <h4>Hỗ trợ</h4>
          <p>1900 1234</p>
          <p>Gọi chúng tôi từ Thứ Hai đến Thứ Sáu, 8h sáng - 5h chiều</p>
          <h4>Kết nối với chúng tôi</h4>
          <ul>
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Phòng tin tức</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
          <h4>Theo dõi chúng tôi</h4>
          <div className={styles.socialIcons}>
            <a href="#"><img src="https://via.placeholder.com/20x20?text=F" alt="Facebook" /></a>
            <a href="#"><img src="https://via.placeholder.com/20x20?text=X" alt="X" /></a>
            <a href="#"><img src="https://via.placeholder.com/20x20?text=In" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Region Links */}
      <div className={styles.regionLinks}>
        <a href="#"><img src="https://via.placeholder.com/20x20?text=VN" alt="Cờ Việt Nam" /> ChaoLuatSu VN</a>
        <a href="#"><img src="https://via.placeholder.com/20x20?text=US" alt="Cờ Hoa Kỳ" /> ChaoLuatSu US</a>
        <a href="#"><img src="https://via.placeholder.com/20x20?text=SG" alt="Cờ Singapore" /> ChaoLuatSu SG</a>
        <a href="#"><img src="https://via.placeholder.com/20x20?text=JP" alt="Cờ Nhật Bản" /> ChaoLuatSu JP</a>
        <a href="#"><img src="https://via.placeholder.com/20x20?text=AU" alt="Cờ Úc" /> ChaoLuatSu AU</a>
      </div>
    </footer>
  );
};

export default Footer;