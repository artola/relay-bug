import {graphql} from 'react-relay';

graphql`
  fragment bugFoo on F2 {
    foo
  }
`;

graphql`
  query bugQuery {
    q {
      ...bugFoo @relay(mask: false)
    }
  }
`;