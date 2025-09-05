'use client';

import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Container from '../ui/Container';

export default function TopBarITP() {
  const scrollToITP = () => {
    document.getElementById('itp-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-accent/10 border-b border-accent/20">
      <Container>
      <div className="py-3">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="shield" size={18} className="text-accent" />
              <span className="font-medium">Stație ITP autorizată RAR</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Icon name="clock" size={18} className="text-accent" />
              <span>Programări rapide</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Icon name="check" size={18} className="text-accent" />
              <span>Verificări complete</span>
            </div>
          </div>
          <Button 
            size="sm" 
            className="text-sm font-medium"
            onClick={scrollToITP}
          >
            Programează ITP
          </Button>
        </div>
      </div>
      </Container>
    </div>
  );
}
