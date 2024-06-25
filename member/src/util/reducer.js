export function reducer(member, action) {
  switch (action.type) {
    case "REGISTER":
      return [action.data, ...member];
    case "UPDATE":
      return member.map((mem) =>
        mem.no === action.data ? { ...mem, idCheck: !mem.idCheck } : mem
      );
    case "DELETE":
      return member.filter((mem) => mem.no !== action.data);
  }
}
