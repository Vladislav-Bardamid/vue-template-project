import appointments from 'src/assets/appointments.json';
import messages from 'src/assets/messages.json';
import tasks from 'src/assets/tasks.json';

export default {
  name: "app-dashboard-people",
  data: () => {
    return {
      messages,
      tasks,
      appointments,
    };
  }
};
