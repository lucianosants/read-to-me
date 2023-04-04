import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactElement;
}

export default function Button({ icon, ...props }: ButtonProps) {
    return (
        <button type="button" {...props} className="text-primary-50 hover:text-primary-500">
            {icon}
        </button>
    );
}
