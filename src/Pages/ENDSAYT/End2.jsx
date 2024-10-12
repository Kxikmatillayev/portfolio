import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Backbutton from '../../utils/Backbutton';

const End2 = () => {
    const { t } = useTranslation("end");

    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const [phone, setPhone] = useState({
        number: '+998',
    });

    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const BOT_TOKEN = "7572530392:AAHl6kWY__PXJ5TBEinOj-XN7Eqh1_EuOhQ";
    const MY_ID = "845813900";

    const sendMessageBot = (e) => {
        e.preventDefault();

        // No restriction on the number of digits after +998
        const phoneRegex = /^\+998\d{0,}$/;

        if (!formData.name || !phoneRegex.test(phone.number)) {
            setError('Please fill out all required fields: Name and a valid Phone number (+998).');
            return;
        }

        setError('');

        let messageText = `Your name: ${formData.name}\nPhone number: ${phone.number}`;
        if (formData.message) {
            messageText += `\nMessage: ${formData.message}`;
        }

        axios
            .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                chat_id: MY_ID,
                text: messageText,
            })
            .then((response) => {
                console.log("Message sent:", response.data);
                setFormData({ name: '', message: '' });
                setPhone({ number: '+998' });
                setIsModalOpen(true);
            })
            .catch((error) => {
                console.error("Error sending message:", error);
                setError('Failed to send message. Please try again later.');
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        setPhone({
            ...phone,
            number: input,
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className='dark:bg-dark py-10 dark:text-oq'>
                <section className='container flex flex-col justify-center items-center'>
                    <h1 className='text-3xl underline font-bold pb-10'>{t("boglanish")}</h1>
                    <section className='flex flex-col md:flex-row justify-center items-center gap-10 w-full'>
                        <section className='flex flex-col justify-start p-10 w-full md:w-[30%] gap-4 bg-gray-200 rounded-md dark:bg-qora'>
                            <div>
                                <h1 className='font-semibold text-gren'>{t("tel")}</h1>
                                <a href="tel:+998909041685"><span className='cursor-pointer opacity-60 hover:opacity-100'>+998 90 904 16 85</span></a>
                            </div>
                            <div>
                                <h1 className='font-semibold text-gren'>EMAIL</h1>
                                <span className='cursor-pointer opacity-60 hover:opacity-100'>xikmatillayev24@gmail.com</span>
                            </div>
                            <div>
                                <h1 className='font-semibold text-gren'>TELEGRAM</h1>
                                <span className='cursor-pointer opacity-60 hover:opacity-100'>Kxikmatillayev_R</span>
                            </div>
                            <div>
                                <h1 className='font-semibold text-gren'>{t("joy")}</h1>
                                <span className='cursor-pointer opacity-60 hover:opacity-100'>{t("joylashgan")}</span>
                            </div>
                        </section>
                        <section className='w-full md:w-[70%] flex flex-col justify-start items-start text-start gap-5'>
                            <h1 className='text-2xl font-bold'>{t("yozaver")}</h1>
                            <p>{t("taklif")}</p>

                            <form className='flex flex-col justify-start gap-4 w-full' onSubmit={sendMessageBot}>
                                <input
                                    className='bg-transparent p-3 focus:outline-none text-gren border-b-2 border-gren'
                                    type="text"
                                    name="name"
                                    placeholder={t("ism")}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    className='bg-transparent p-3 focus:outline-none text-gren border-b-2 border-gren'
                                    type="text"
                                    name="phone"
                                    placeholder={t("tel")}
                                    value={phone.number}
                                    onChange={handlePhoneChange}
                                />
                                <input
                                    className='bg-transparent p-3 focus:outline-none text-gren border-b-2 border-gren'
                                    name="message"
                                    placeholder={t("coment")}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                <button type="submit" className='md:w-[30%] py-2 px-5 border-2 border-gren rounded-md hover:bg-oq hover:text-gren duration-200 font-semibold'>
                                    {t("buttontext")}
                                </button>
                                {error && <p className='text-red-500'>{error}</p>}
                            </form>
                        </section>
                    </section>
                    <Backbutton />
                </section>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                        <h1 className="text-2xl font-bold mb-4">{t('ok')}</h1>
                        <button
                            className="px-4 py-2 bg-gren text-white rounded-md hover:bg-dark-gren"
                            onClick={closeModal}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default End2;
