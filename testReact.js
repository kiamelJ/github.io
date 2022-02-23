
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
        <button onClick={() => this.setState({ liked: true })}>
          Like
        </button>
      );
  }
}

//const gitApi = 'https://api.github.com/users/kiamelJ/repos';

fetch('https://api.github.com/users/kiamelJ/repos')
    .then((res) => res.json())
    .then((repo) => {
        console.log(repo)
    })

const domContainer = document.querySelector('#test-react');
ReactDOM.render(e(LikeButton), domContainer);