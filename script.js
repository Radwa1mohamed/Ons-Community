
        // فتح وإغلاق قائمة الموبايل
        const menuToggle = document.getElementById('menuToggle');
        const navGroup = document.getElementById('navGroup');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navGroup.classList.toggle('active');
        });

        document.querySelectorAll('.nav-item, .btn-wards').forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navGroup.classList.remove('active');
            });
        });

        // التحكم بالنافذة المنبثقة للورد اليومي (Modal)
        const modal = document.getElementById('wardsModal');
        const openBtn = document.getElementById('openWardsBtn');
        const closeBtn = document.getElementById('closeWardsBtn');

        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
            showDay(1); // فتح اليوم الأول تلقائياً عند فتح المودال
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // ستايل موحد وثابت لزر فورم المحاسبة لضمان عدم اختفائه مجدداً
        const btnStyle = `display: inline-block; background-color: #e05295; color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-weight: bold; margin-top: 10px; transition: background 0.3s; box-shadow: 0 4px 6px rgba(224, 82, 149, 0.2);`;

        // قاعدة البيانات المفصلة للأيام من 1 إلى 20 مع التنسيق المباشر للأزرار
        const daysData = {
            1: `
            <h4 class="day-content-title">ورْد اليوم الأول ✨</h4>
            <a href="https://youtu.be/5IK8LpEHhbc?si=u0VVAo7Z_fPX5pKz" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة الأولى من سلسلة الشيخ مشاري الخراز على يوتيوب.</p>
            </a>
            <a href="https://t.me/Mfatee7Alsakena/531" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>نصف ساعة من أول محاضرة في مفاتيح السكينة لتدبر وفهم الأذكار.</p>
            </a>
            <a href="https://t.me/+SPn2oDqBi5ZkODc8" target="_blank" class="task-link-item channel-badge">
                <h5>❤️ رابط قناة مفاتيح السكينة الرسمية</h5>
                <p>اضغطي هنا للانضمام المباشر لمتابعة كافة التحديثات اليومية.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>أول صفحة من سورة البقرة؛ من الفاتحة لوجه "إن الذين كفروا" (يمكن قراءتها أو سماعها).</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الأول</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="https://forms.gle/Vd7Wn1Uvkh4GDvT59" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            2: `
            <h4 class="day-content-title">ورْد اليوم الثاني 🌿</h4>
            <a href="https://youtu.be/zey8O9FzM88?si=M3SdbT2TUKOMYFxB" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة الثانية من الدورة على يوتيوب.</p>
            </a>
            <a href="https://t.me/Mfatee7Alsakena/531" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>ثاني نصف ساعة من محاضرة مفاتيح السكينة لتعميق تدبر الأذكار.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 2 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الثاني</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="https://forms.gle/Tq5V3K14M3Ei4xG9A" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            3: `
            <h4 class="day-content-title">ورْد اليوم الثالث 🌸</h4>
            <a href="https://youtu.be/3JiYl1h1Tvg?si=VAd89fvUi4s33Q_p" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة الثالثة من الدورة على يوتيوب.</p>
            </a>
            <a href="https://t.me/Mfatee7Alsakena/531" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>ثالث ربع ساعة من محاضرة مفاتيح السكينة.</p>
            </a>
            <a href="https://t.me/+SPn2oDqBi5ZkODc8" target="_blank" class="task-link-item channel-badge">
                <h5>❤️ رابط قناة مفاتيح السكينة (تذكير بالانضمام)</h5>
                <p>تأكدي من دخول رابط القناة أولاً لمتابعة الصوتيات والدروس.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 3 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الثالث</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="https://forms.gle/NWfJGuQTyL7x6er48" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            4: `
            <h4 class="day-content-title">ورْد اليوم الرابع 💙</h4>
            <a href="https://youtu.be/k2-BUtUh1sg?si=BfhTMOLtZzJFPB9Z" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة الرابعة من الدورة على يوتيوب.</p>
            </a>
            <a href="https://t.me/Mfatee7Alsakena/532" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>أول نصف ساعة من محاضرة مفاتيح السكينة 2 (الجزء الأول).</p>
            </a>
            <a href="https://t.me/+SPn2oDqBi5ZkODc8" target="_blank" class="task-link-item channel-badge">
                <h5>❤️ رابط قناة مفاتيح السكينة الرسمية</h5>
                <p>اضغطي هنا للانضمام المباشر لمتابعة كافة التحديثات اليومية.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 4 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الرابع</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="https://forms.gle/wwYR5rxRHdmCv5h66" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            5: `
            <h4 class="day-content-title">ورْد اليوم الخامس ✨</h4>
            <a href="https://youtu.be/H5U5hsIJF1E?si=U2wutoG5K5IIc82L" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة الخامسة من الدورة على يوتيوب.</p>
            </a>
            <a href="https://t.me/Mfatee7Alsakena/532" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>ثاني نصف ساعة من محاضرة 2 (الجزء الأول).</p>
            </a>
            <a href="https://t.me/+SPn2oDqBi5ZkODc8" target="_blank" class="task-link-item channel-badge">
                <h5>❤️ رابط قناة مفاتيح السكينة الرسمية</h5>
                <p>اضغطي هنا للانضمام المباشر لمتابعة كافة التحديثات اليومية.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 5 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الخامس</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="https://forms.gle/2ms9a3Mvvzw53Ypq7" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            6: `
            <h4 class="day-content-title">ورْد اليوم السادس 🌿</h4>
            <a href="https://youtu.be/EhYhE78iQAk?si=1U_1G_Ekt1jn493W" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة السادسة من الدورة على يوتيوب.</p>
            </a>
            <a href="https://t.me/Mfatee7Alsakena/533" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>أول نصف ساعة من محاضرة مفاتيح السكينة 2 (الجزء الثاني).</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 6 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم السادس</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="https://forms.gle/w5FCrgrTLG2t8WMG6" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            7: `
            <h4 class="day-content-title">ورْد اليوم السابع ✨</h4>
            <a href="https://youtu.be/kBWFJwTBOJE?si=G7kzNwFvtltyrP8T" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة السابعة من الدورة على يوتيوب.</p>
            </a>
            <a href="https://t.me/Mfatee7Alsakena/533" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>تكملة المحاضرة الثانية من سلسلة مفاتيح السكينة لتعميق السكينة والتدبر.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 7 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم السابع</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="https://forms.gle/osfFvDnTcGdJ5pJd6" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            8: `
            <h4 class="day-content-title">ورْد اليوم الثامن 🌿</h4>
            <a href="https://youtu.be/9XmbDyp8jbU?si=8vSiQ5hnWLYb0n4X" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة الثامنة من الدورة على يوتيوب.</p>
            </a>
            <a href="https://t.me/Mfatee7Alsakena/534" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 8 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الثامن</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            9: `
            <h4 class="day-content-title">ورْد اليوم التاسع ✨</h4>
            <a href="https://youtu.be/Z2OMmFEfv8A?si=1HOw9nWVMT28s_HC" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة التاسعة من الدورة على يوتيوب.</p>
            </a>
            <a href="https://t.me/Mfatee7Alsakena/535" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 9 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم التاسع</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            10: `
            <h4 class="day-content-title">ورْد اليوم العاشر 🌸</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة العاشرة من الدورة على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 10 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم العاشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            11: `
            <h4 class="day-content-title">ورْد اليوم الحادي عشر ✨</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة المخصصة لليوم على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 11 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الحادي عشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            12: `
            <h4 class="day-content-title">ورْد اليوم الثاني عشر 🌿</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة المخصصة لليوم على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 12 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الثاني عشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            13: `
            <h4 class="day-content-title">ورْد اليوم الثالث عشر 🌸</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة المخصصة لليوم على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 13 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الثالث عشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            14: `
            <h4 class="day-content-title">ورْد اليوم الرابع عشر ✨</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة المخصصة لليوم على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 14 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الرابع عشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            15: `
            <h4 class="day-content-title">ورْد اليوم الخامس عشر 🌿</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة المخصصة لليوم على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 15 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الخامس عشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            16: `
            <h4 class="day-content-title">ورْد اليوم السادس عشر 🌸</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة المخصصة لليوم على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 16 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم السادس عشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            17: `
            <h4 class="day-content-title">ورْد اليوم السابع عشر ✨</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة المخصصة لليوم على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 17 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم السابع عشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            18: `
            <h4 class="day-content-title">ورْد اليوم الثامن عشر 🌿</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة المخصصة لليوم على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 18 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم الثامن عشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            19: `
            <h4 class="day-content-title">ورْد اليوم التاسع عشر 🌸</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة المخصصة لليوم على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 19 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم التاسع عشر</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `,
            20: `
            <h4 class="day-content-title">ورْد اليوم العشرين ✨</h4>
            <a href="#" target="_blank" class="task-link-item">
                <h5>1️⃣ كيف تتلذذ بالصلاة 🌸</h5>
                <p>اضغطي هنا لمشاهدة الحلقة العشرين من الدورة على يوتيوب.</p>
            </a>
            <a href="#" target="_blank" class="task-link-item">
                <h5>2️⃣ محاضرات مفاتيح السكينة 🌿</h5>
                <p>اضغطي هنا للاستماع والمتابعة عبر تليجرام.</p>
            </a>
            <div class="task-link-item" style="cursor: default;">
                <h5>3️⃣ الورد القرآني المرتل 💙</h5>
                <p>قراءة أو سماع صفحة 20 من القرآن الكريم.</p>
            </div>
            <div class="form-accounting-box">
                <h6>📝 فورم المحاسبة اليومي لليوم العشرين</h6>
                <p>لا تنسي تسجيل إنجازكِ اليوم لتشجيع نفسكِ ومتابعة استمراريتكِ في الرحلة!</p>
                <a href="#" target="_blank" class="btn-form" style="${btnStyle}">تعبئة فورم المحاسبة 🌸</a>
            </div>
        `
        };

        // دالة عرض محتوى الأيام المحدثة لربطها بقاعدة البيانات المفصلة أعلاه
        function showDay(dayNumber) {
            document.querySelectorAll('.day-card').forEach((card, index) => {
                if (index + 1 === dayNumber) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });

            const contentBox = document.getElementById('dayContentBox');
            // جلب المحتوى التفصيلي لليوم المختار من مصفوفة daysData
            contentBox.innerHTML = daysData[dayNumber];
        }

        // نهاية كود الـ JavaScript وإغلاق الأوسمة
        function showDay(dayNumber) {
            document.querySelectorAll('.day-card').forEach((card, index) => {
                if (index + 1 === dayNumber) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
            const contentBox = document.getElementById('dayContentBox');
            contentBox.innerHTML = daysData[dayNumber] || `<h4 class="day-content-title">قريباً..</h4>`;
        }
   