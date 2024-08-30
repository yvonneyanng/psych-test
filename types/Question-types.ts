export interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (index: number) => void;
  onGoBack: () => void;
  onGoToLanding: () => void;
  isFirstQuestion: boolean;
  progress: number;
}
