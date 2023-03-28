import Image from 'next/image';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import screenshotContacts from '@/images/screenshots/contacts.png';
import screenshotInventory from '@/images/screenshots/inventory.png';
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png';

const features = [
    {
        name: 'Set up an account.',
        summary: 'Set up an account.',
        description: 'Get started by signing up for an account. It’s free and only takes a few seconds.',
        image: screenshotProfitLoss,
        icon: function ReportingIcon() {
            return (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <rect width="100%" height="100%" fill="transparent"/>
                        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="35" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">1</text>
                    </svg>
                </>
            );
        },
    },
    {
        name: 'Send in an event.',
        summary: 'Send in an event.',
        description: 'Send in a pre-defined event such as user signup, purchase, screen visit, or custom event.',
        image: screenshotInventory,
        icon: function InventoryIcon() {
            return (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <rect width="100%" height="100%" fill="transparent"/>
                        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="35" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">2</text>
                    </svg>
                </>
            );
        },
    },
    {
        name: 'Magic Dashboards',
        summary: 'Magic Dashboards',
        description: 'Presto! Magic dashboards are generated for you automatically.',
        image: screenshotContacts,
        icon: function ContactsIcon() {
            return (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <rect width="100%" height="100%" fill="transparent"/>
                        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="35" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">3</text>
                    </svg>
                </>
            );
        },
    },
];

function Feature({
    feature, isActive, className, ...props
}) {
    return (
        <div
            className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
            {...props}
        >
            <div
                className={clsx(
                    'w-9 rounded-lg',
                    isActive ? 'bg-blue-600' : 'bg-slate-500',
                )}
            >
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <feature.icon />
                </svg>
            </div>
            <h3
                className={clsx(
                    'mt-6 text-m font-medium',
                    isActive ? 'text-blue-600' : 'text-slate-600',
                )}
            >
                {feature.name}
            </h3>
            {/* <p className="mt-2 font-display text-xl text-slate-900">
                {feature.summary}
            </p> */}
            <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
        </div>
    );
}

function FeaturesMobile() {
    return (
        <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
            {features.map((feature) => (
                <div key={feature.name}>
                    <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
                    <div className="relative mt-10 pb-10">
                        <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
                        <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                            <Image
                                className="w-full"
                                src={feature.image}
                                alt=""
                                sizes="52.75rem"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function FeaturesDesktop() {
    return (
        <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
            {({ selectedIndex }) => (
                <>
                    <Tab.List className="grid grid-cols-3 gap-x-8">
                        {features.map((feature, featureIndex) => (
                            <Feature
                                key={feature.name}
                                feature={{
                                    ...feature,
                                    name: (
                                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                                            <span className="absolute inset-0" />
                                            {feature.name}
                                        </Tab>
                                    ),
                                }}
                                isActive={featureIndex === selectedIndex}
                                className="relative"
                            />
                        ))}
                    </Tab.List>
                    <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
                        <div className="-mx-5 flex">
                            {features.map((feature, featureIndex) => (
                                <Tab.Panel
                                    static
                                    key={feature.name}
                                    className={clsx(
                                        'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                                        featureIndex !== selectedIndex && 'opacity-60',
                                    )}
                                    style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                                    aria-hidden={featureIndex !== selectedIndex}
                                >
                                    <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                        <Image
                                            className="w-full"
                                            src={feature.image}
                                            alt=""
                                            sizes="52.75rem"
                                        />
                                    </div>
                                </Tab.Panel>
                            ))}
                        </div>
                        <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
                    </Tab.Panels>
                </>
            )}
        </Tab.Group>
    );
}

export function SecondaryFeatures() {
    return (
        <section
            id="secondary-features"
            aria-label="Features for simplifying everyday business tasks"
            className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
        >
            <Container>
                <div className="mx-auto max-w-3xl md:text-center">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        Get started in as little as five minutes.
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        Starting an analytics dashboard has never been so easy.
                    </p>
                </div>
                <FeaturesMobile />
                <FeaturesDesktop />
            </Container>
        </section>
    );
}
