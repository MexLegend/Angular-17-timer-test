
export type DialogSize = 'lg' | 'md' | 'sm';

export interface IDialogProps {
  size?: DialogSize;
  title: string;
  timer: number;
  description: string;
}
