// انتظر حتى يتم تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function() {
    
    // البحث عن نموذج الاتصال في الصفحة
    const contactForm = document.getElementById("contactForm");

    // إذا وجد النموذج، قم بتفعيل الحدث
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // منع إعادة تحميل الصفحة الافتراضي
            event.preventDefault();
            
            // إظهار رسالة للمستخدم
            alert("شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح.");
            
            // تفريغ الحقول بعد الإرسال
            contactForm.reset();
        });
    }

    // إضافة تأثير بسيط عند الضغط على زر "أضف إلى السلة"
    const addToCartButtons = document.querySelectorAll(".product-card .btn");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("تمت إضافة المنتج إلى السلة بنجاح!");
        });
    });
});
