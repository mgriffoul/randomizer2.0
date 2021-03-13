export interface JiraIssue {
  id: string;
  key: string;
  fields: {
    summary: string;
    customfield_10004: number | null | undefined;
    customfield_11561?: number | null | undefined;
    issuetype: {
      name: string;
    };
    status: {
      name: string;
    };
  };
}
