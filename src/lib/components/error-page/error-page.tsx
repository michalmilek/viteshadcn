import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          navigate(-1);
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleManualRedirect = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Error Occurred</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            404 error occurred. Redirecting you to the home page in
            <span className="font-bold" aria-live="polite" aria-atomic="true">
              {countdown} second{countdown !== 1 ? 's' : ''}
            </span>
            .
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700" role="progressbar" aria-valuenow={countdown} aria-valuemin={0} aria-valuemax={5}>
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${(countdown / 5) * 100}%` }}
            ></div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleManualRedirect} className="w-full">
            Redirect Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
