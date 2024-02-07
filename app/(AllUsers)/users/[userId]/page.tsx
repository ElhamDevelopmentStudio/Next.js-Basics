// This kind of naming is used for files that require a dynamic path

interface userPageProps {
  params: {
    userId: string;
  };
}

const page = ({ params }: userPageProps) => {
  return <div>user id: {params.userId}</div>;
};

export default page;
