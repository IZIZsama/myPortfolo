import React, { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react';
// import emailjs from '@emailjs/browser'; // EmailJS設定完了後にコメントアウトを解除
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const contactRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(contactRef);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJSの初期化（設定完了後にコメントアウトを解除）
  /*
  React.useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // EmailJSのパブリックキーを設定
  }, []);
  */

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // フォームデータをコンソールに出力（デバッグ用）
      console.log('Form Data:', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      // EmailJSの設定が完了するまでの一時的な処理
      // 実際のEmailJS設定が完了したら、以下のコメントアウトを解除してください
      
      /*
      // EmailJSのテンプレートパラメータ
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'koiuzmi3751@gmail.com',
        subject: `お問い合わせ from ${formData.name}`
      };

      // EmailJSを使用してメールを送信
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // EmailJSのサービスID
        'YOUR_TEMPLATE_ID', // EmailJSのテンプレートID
        templateParams,
        'YOUR_PUBLIC_KEY' // EmailJSのパブリックキー
      );

      if (result.status === 200) {
        alert(t('contact.successMessage'));
        setFormData({ name: '', email: '', message: '' });
      }
      */

      // 一時的な成功メッセージ
      alert(t('contact.successMessage'));
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      alert(t('contact.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // GoogleフォームURL（言語で切り替え）
  const googleFormUrl =
    (t('contact.title') === 'お問い合わせ')
      ? 'https://forms.gle/Y41CDDEt8UzwfFUQA'
      : 'https://forms.gle/2yqHRUQYhZEVgGzJ6';

  const socialLinks = [
    { icon: Github, href: 'https://github.com/IZIZsama', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/慶-小泉-56202a354', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/KKei2027', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contactRef} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('contact.getInTouch')}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{t('contact.email')}</p>
                      <p className="text-gray-600 dark:text-gray-300">koiuzmi3751@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{t('contact.phone')}</p>
                      <p className="text-gray-600 dark:text-gray-300">080-2511-5838</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{t('contact.location')}</p>
                      <p className="text-gray-600 dark:text-gray-300">Kyoto, Japan</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {t('contact.followMe')}
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <button
                type="button"
                onClick={() => window.open(googleFormUrl, '_blank')}
                className="w-full flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="mr-2" size={20} />
                {t('contact.goToForm')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;