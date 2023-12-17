interface InitialsType {
  name?: string;
}

export const getInitials = ({ name }: InitialsType) => {
  if (!name) return "";

  const nameArray = name.split(" ");
  if (nameArray.length === 1) {
    return nameArray[0].charAt(0).toUpperCase();
  } else {
    return (
      nameArray[0].charAt(0).toUpperCase() +
      nameArray[nameArray.length - 1].charAt(0).toUpperCase()
    );
  }
};
