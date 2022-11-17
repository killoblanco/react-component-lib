interface Props {
  name?: string
}

export const Greetings = ({ name }: Props): JSX.Element => <div>Hello {name ?? 'World'}!</div>
