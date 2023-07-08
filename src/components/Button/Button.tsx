import React from 'react';

type ButtonPropsType = {
    name: string
    onClick?: () => void
    disabled?: boolean
    className: string
}

export const Button: React.FC<ButtonPropsType> = ({
                                                      name,
                                                      onClick,
                                                      disabled,
                                                      className
                                                  }) => {
    return (
        <div >
            <button
                onClick={onClick}
                disabled={disabled}
                className={className}
            >
                {name}
            </button>
        </div>
    );
};

