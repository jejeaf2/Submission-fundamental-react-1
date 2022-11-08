import React from 'react';
// import MovieDetail from '../components/MovieDetail';
import NoteDetail from '../components/NoteDetail';
import { getInitialData } from '../utils';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData()
    };
  }

  render() {
    if (this.state.notes === null) {
      return <p>notes is not found!</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.notes} />
      </section>
    );
  }
}

export default DetailPage;
