import Image from 'next/image';
import logo from '@/images/logos/swiftmetrics.png';

export function Logo(props) {
    return (
        <div className="flex">
            <Image style={{ width: '200px' }} alt="logo" src={logo} />
        </div>
    );
}
