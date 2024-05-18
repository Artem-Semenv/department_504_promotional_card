<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpecialityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
                DB::table('specialities')->insert([
                    [
                    'number' => 172,
                    'name' => array(
                        'ukr' => "Електронні комунікації та радіотехніка",
                        'eng' => "Electronic communications and radio engineering"),
                    'description' => [
                        'ukr' => "Ми ставимо собі за мету підготувати висококваліфікованих фахівців в області побудови і програмування інфокомунікаційних сервісів і систем. Ядром навчального процесу виступає мережева академія Cisco з повним спектром викладаються курсів: мережева інженерія та адміністрування, програмування, кібербезпека і інтернет речей. Постійне застосування різних мов програмування протягом всього навчання і практично в кожному курсі: Python, Java/Kotlin, JavaScript, C/C++. Ми самі створюємо інформаційні системи і вчимо цьому студентів: Android і Full-stack Web-програмування (Front-end - HTML5/CSS3, TypeScript, React; Back-end - Spring, Flask/Django; бази даних - PostgreSQL, MongoDB, Redis). На підтвердження вищесказаного - даний сайт і Telegram-бот є нашою розробкою. D://CT :)",
                        'eng' => 'We aim to train highly qualified specialists in the field of building and programming of information and communication services and systems. The core of the educational process is the network academy Cisco Network Academy with a full range of courses: network engineering and administration, programming cybersecurity and the Internet of Things. Constant use of different programming languages throughout the training and in almost every course: Python, Java/Kotlin, JavaScript, C/C++. We create information systems ourselves and teach students how to do it: Android and Full-stack Web programming (Front-end - HTML5/CSS3, TypeScript, React; Back-end - Spring, Flask/Django; databases - PostgreSQL, MongoDB, Redis). To confirm the above this website and Telegram bot are developed by us. D://CT :)'
                    ],
                    'study_program' => array(
                        'ukr' => "Інжиніринг і програмування інфокомунікаційних систем",
                        'eng' => "Engineering and programming of information and communication systems"
                    ),
                    'pass_score' => 141.882,
                    'learning_time' => array(
                        'ukr' => "3 роки, 10 місяців",
                        'eng' => "3 years, 10 months"
                    )
                ],[
                    'number' => 126,
                    'name' => 'Інформаційні системи та технології',
                    'description' => array(
                        'ukr' => "Симбіоз штучного інтелекту та інформаційних систем: Web-програмування з елементами машинного навчання або штучний інтелект який підкоряє собі мережі і комп'ютерні системи? Унікальна освітня програма, що поєднує в собі постійне програмування на Python, Java/Kotlin, JavaScript, C/C++ і роботу над крутими проєктами. Ми посилено викладаємо Web-програмування в усіх його проявах: Front-end - HTML/CSS, React; Back-end - Spring, Flask/Django; бази даних - PostgreSQL, MongoDB, Redis; і авжеж не забуваємо про мережі! Поглиблено вивчаються сучасні методи і інструменти машинного навчання (Pandas, Scikit-learn, Keras, TensorFlow, PyTorch) в обробці мультимедійних даних і не тільки. Підтвердженням вищесказаного є простий факт - даний сайт і Telegram-бот є нашою розробкою. D://CT :)",
                        'eng' => "Symbiosis of artificial intelligence and information systems: Web programming with elements of machine learning or artificial intelligence that takes over networks and computer systems? A unique educational program that combines ongoing programming in Python, Java/Kotlin, JavaScript, C/C++, and work on cool projects. We teach Web programming in all its manifestations: Front-end - HTML/CSS, React; Back-end - Spring, Flask/Django; databases - PostgreSQL, MongoDB, Redis; and of course, we don't forget about networks! In-depth study of modern methods and tools of machine learning (Pandas, Scikit-learn, Keras, TensorFlow, PyTorch) in processing multimedia data and more. The above is confirmed by the simple fact that this website and Telegram bot are developed by us. D://CT :)"
                    ),
                    'study_program' => array(
                        'ukr' => "Штучний інтелект та інформаційні системи",
                        'eng' => "Artificial intelligence and information systems"
                    ),
                    'pass_score' => 157.397,
                    'learning_time' => array(
                        'ukr' => "3 роки, 10 місяців",
                        'eng' => "3 years, 10 months"
                    )
        ]]);
    }
}
