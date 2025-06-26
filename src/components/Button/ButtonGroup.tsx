import { JSX, type MouseEventHandler, useState } from 'react';
import classes from './button-group.module.scss';

export function ButtonGroup(props: ButtonGroupProps) {
    const [selectedItem, setSelectedItem] = useState<ButtonItem>(props.buttonItems[0]);

    const onButtonClick: MouseEventHandler<HTMLButtonElement> = event => {
        event.stopPropagation();
        const clickedButton = event.currentTarget as HTMLButtonElement;
        const selectedItem = props.buttonItems.find(i => i.id === clickedButton.id)!;
        setSelectedItem(selectedItem);
        props.onSelectedOptionChanged(selectedItem);
    };

    return (
        <div className={classes.button_group}>
            {props.buttonItems.map(buttonItem => (
                <button key={buttonItem.id} id={buttonItem.id} className={classes.button_group__item} onClick={onButtonClick} aria-selected={selectedItem?.id === buttonItem.id}>
                    {buttonItem.icon}
                    {buttonItem.label}
                </button>
            ))}
        </div>
    );
}

export interface ButtonItem {
    id: string;
    label: string;
    icon?: JSX.Element;
}

export interface ButtonGroupProps {
    buttonItems: ButtonItem[];
    onSelectedOptionChanged: (selectedOption: ButtonItem) => void;
}
