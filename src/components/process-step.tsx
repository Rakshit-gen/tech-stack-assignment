

interface ProcessStepProps {
    icon: React.ReactNode;
    title: string;
    className?: string;
  }

export const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, className = "" }) => (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
        {icon}
      </div>
      <p className="text-sm text-center">{title}</p>
    </div>
  );