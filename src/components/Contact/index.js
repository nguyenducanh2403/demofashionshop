import React, { useRef } from 'react';
import { MdOutlineEmail, MdPhoneInTalk } from 'react-icons/md';

const Contact = () => {
    const form = useRef();

    return (
        <section id="contact">
            <h3 className="border-b border-primary mt-12 mb-6 pb-4">お問合せ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col justify-start px-16">
                    <artice className="border-b border-primary pb-4">
                        <MdOutlineEmail className="text-xl" />
                        <h4>メール</h4>
                        <h4>demo@mail.fashionshop.com</h4>
                        <a href="" targer="_blank" className="border-2 text-lg border-primary px-4">
                            無料相談
                        </a>
                    </artice>
                    <artice className="my-4 border-b border-primary pb-4">
                        <MdPhoneInTalk className="text-xl" />
                        <h4>電話</h4>
                        <h4>+8190-0000-0000</h4>
                        <a href="" targer="_blank" className="border-2 text-lg border-primary px-4">
                            無料相談
                        </a>
                    </artice>
                </div>
                <form className="flex flex-col col-span-2 px-16" action="" ref={form} onSubmit="">
                    <h4 className="mb-4">お問合せフォーム</h4>
                    <input className="mb-4 border-2" type="text" name="name" placeholder="  氏名" required />
                    <input className="mb-4 border-2" type="email" name="email" placeholder="  メールアドレス" />
                    <textarea
                        className="mb-4 border-2"
                        name="message"
                        placeholder="  メッセージ本文"
                        cols="30"
                        rows="6   "
                    ></textarea>
                    <button type="submit" className="btn md:w-max transition ease-out duration-500">
                        送信
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
