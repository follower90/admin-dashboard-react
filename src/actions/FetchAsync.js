export default function FetchAsync(url, success, error) {
  return (dispatch) => {
      fetch(url)
          .then((response) => {
              if (!response.ok) throw Error(response.statusText);
              return response;
          })
          .then((response) => response.json())
          .then((data) => dispatch(success(data)))
          .catch((e) => dispatch(error(String(e))));
  };
}
