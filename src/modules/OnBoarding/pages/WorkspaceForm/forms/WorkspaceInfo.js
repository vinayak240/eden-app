const WorkspaceInfo = {
  form_id: 2,
  title: "Let's set up a home for all your work",
  caption: "You can always create another workspace later.",
  fields: [
    {
      label: "Workspace Name",
      id: "workspace_name",
      type: "text",
      placeholder: "Eden",
      required: true,
    },
    {
      label: "Workspace URL",
      id: "workspace_url",
      type: "text",
      placeholder: "Example",
      prefix: "www.eden.com/",
      required: false,
    },
  ],
};

export default WorkspaceInfo;
