import { useState, useEffect } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardOverview } from './pages/DashboardOverview';
import { EmployeeManagement } from './features/employee/EmployeeManagement';
import { AttendanceLeave } from './features/attendance/AttendanceLeave';
import { PayrollManagement } from './features/payroll/PayrollManagement';
import { AIAssistant } from './features/dashboard/AIAssistant';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'employees':
        return <EmployeeManagement />;
      case 'attendance':
        return <AttendanceLeave />;
      case 'payroll':
        return <PayrollManagement />;
      case 'ai-assistant':
        return <AIAssistant />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {renderContent()}
    </DashboardLayout>
  );
}
