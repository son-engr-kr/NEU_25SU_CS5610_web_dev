import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PeopleTable from "./Table";
import * as coursesClient from "../client";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    if (!cid) return;
    try {
      const data = await coursesClient.findUsersForCourse(cid);
      setUsers(data);
    } catch (e) {
      console.error("Failed to fetch users for course", e);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  return <PeopleTable users={users} />;
} 