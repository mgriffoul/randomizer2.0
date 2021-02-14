export interface JiraIssue {
  id: string;
  key: string;
  fields: {
    summary: string;
    customfield_10004: number | undefined | null;
    customfield_11561: number | undefined | null;
    issuetype: {
      name: string;
    };
    status: {
      name: string;
    };
  };
}
