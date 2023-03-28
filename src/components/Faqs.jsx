import Image from 'next/image';

import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-faqs.jpg';

const faqs = [
    [
        {
            question: 'Why shouldn\'t I just use Google Analytics?',
            answer: 'Google Analytics was built for the web primarily. While you can absolutely use GA, apps and SPAs are not the primary focus of GA. It also takes quite a lengthy time to set up with custom events, with a steep learning curve.',
        },
        {
            question: 'Why shouldn\'t I use Mixpanel / Amplitude / Heap?',
            answer: 'While those are great solutions, they are also quite powerful/flexible and unopinionated. We want to enable teams to run reports as soon as possible without the need for an analytics expert.',
        },
    ],
    [
        {
            question: 'What kind of pre-defined events and metrics do you track?',
            answer: 'Active users, user signups, user churn, referrals, page visits, most active users, payments received, retention and more.',
        },
        {
            question: 'Am I limited to just pre-defined events?',
            answer: 'Absolutely not. While we offer pre-defined events to help you save time and get started, feel free to create your own customizable dashboards and reports.',
        },
        // {
        //     question: 'I found other companies called TaxPal, are you sure you can use this name?',
        //     answer: 'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
        // },
    ],
    [
        {
            question: 'How can I save time by using SwiftMetrics?',
            answer: 'SwiftMetrics offers best-in-class dashboards and reports that are pre-built for you, which means you can leave the reporting to us while you build your product.',
        },
        {
            question: 'What kinds of integrations do you support?',
            answer: 'Slack, Segment, Zapier, and more. We are always adding more integrations so if you don’t see what you need, let us know and we will add it to our roadmap.',
        },
        // {
        //     question: 'Can we expect more inventory features?',
        //     answer: 'In life it’s really better to never expect anything at all.',
        // },
        // {
        //     question: 'I lost my password, how do I get into my account?',
        //     answer: 'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
        // },
    ],
];

export function Faqs() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
        >
            <Image
                className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
                src={backgroundImage}
                alt=""
                width={1558}
                height={946}
                unoptimized
            />
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
                >
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg leading-7 text-slate-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
