// ตัวดักจับเหตุการณ์เมื่อฟอร์ม BMI ถูกส่ง
document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันไม่ให้ฟอร์มส่งตามปกติ

    // รับค่าความสูงและน้ำหนักที่ผู้ใช้ป้อน
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    // ตรวจสอบว่าค่าที่ป้อนมาถูกต้อง
    if (height > 0 && weight > 0) {
        // คำนวณค่า BMI
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let resultText = `ค่า BMI ของคุณคือ ${bmi}`;

        // ระบุประเภทของ BMI
        if (bmi < 18.5) {
            resultText += ' (น้ำหนักน้อย)';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += ' (น้ำหนักปกติ)';
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText += ' (น้ำหนักเกิน)';
        } else {
            resultText += ' (โรคอ้วน)';
        }

        // แสดงผลลัพธ์
        document.getElementById('result').textContent = resultText;
    } else {
        // แสดงข้อความผิดพลาดหากป้อนค่าที่ไม่ถูกต้อง
        document.getElementById('result').textContent = 'กรุณาป้อนค่าความสูงและน้ำหนักที่ถูกต้อง';
    }
});

// ฟังก์ชันการทำงานของโมดอลตั้งค่า

// รับองค์ประกอบ
const settingsBtn = document.getElementById('settings-btn');
const modal = document.getElementById('settings-modal');
const closeModal = document.getElementsByClassName('close')[0];
const colorSchemeSelect = document.getElementById('color-scheme');

// เปิดโมดอลเมื่อคลิกที่ปุ่มตั้งค่า
settingsBtn.onclick = function() {
    modal.style.display = 'block';
};

// ปิดโมดอลเมื่อคลิกที่ปุ่มปิด
closeModal.onclick = function() {
    modal.style.display = 'none';
};

// ปิดโมดอลหากผู้ใช้คลิกนอกพื้นที่โมดอล
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// เปลี่ยนธีมสีเมื่อมีการเลือกตัวเลือกใหม่
colorSchemeSelect.onchange = function() {
    const scheme = colorSchemeSelect.value; // รับค่าธีมที่เลือก
    document.body.className = scheme; // ใช้ธีมที่เลือกโดยการเปลี่ยนชื่อคลาสใน body
};
