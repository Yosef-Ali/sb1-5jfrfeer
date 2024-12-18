interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <p className="text-destructive">{message}</p>
    </div>
  );
}