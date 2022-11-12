interface Props {
  name?: string
}

export const Greetings = ({ name }: Props) => <div>Hello {name ?? 'World'}!</div>
