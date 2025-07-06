export function Emoji({ character, label }: IEmojiDetails) {
    return (
        <span role="img" aria-label={`${label} emoji`}>
            {character}{' '}
        </span>
    );
}

interface IEmojiDetails {
    character: string;
    label: string;
}
