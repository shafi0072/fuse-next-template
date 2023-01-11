import _ from '../../../../utils/lodash';

const EventModel = (data) =>
  _.defaults(data || {}, {
    title: '',
    allDay: true,
    start: new Date(),
    end: new Date(),
    extendedProps: { desc: '', label: '' },
  });

export default EventModel;
