import { mount, shallowMount } from "@vue/test-utils";
import ReportGenerator from "@/components/report-generator/ReportGenerator.vue";

describe("mflks", () => {
  test("displays messagezqe", () => {
    const wrapper = mount(ReportGenerator);

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Hello world");
  });

  it("displays message", async () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(ReportGenerator);
    console.log(wrapper);
    console.log("wrapper");
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Hello world");
  });
});
// The component to test
