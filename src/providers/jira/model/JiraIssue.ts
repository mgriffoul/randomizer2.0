export interface JiraIssue {
  id: string;
  key: string;
  fields: {
    summary: string;
    customfield_10004: number;
    customfield_11561?: number;
    issuetype: {
      name: string;
    };
    status: {
      name: string;
    };
    sprint?: {
      name?: string;
    };
  };
}
