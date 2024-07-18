import {mount} from '@vue/test-utils'
import SearchBar from "@/components/SearchBar.vue";

describe('SearchBar', () => {
  test('renders correctly', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.element).toMatchSnapshot()
  })
})
