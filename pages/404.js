import ErrorLayout from 'components/layout/ErrorLayout';

function Custom404() {
  return (
    <ErrorLayout
      title="Not Found"
      subTitle="Sorry, there's nothing in this url."
    />
  );
}

export default Custom404;
