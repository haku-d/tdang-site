import { format } from 'date-fns';

export default function DateComponent({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'MM/dd/yyyy')}
    </time>
  );
}
