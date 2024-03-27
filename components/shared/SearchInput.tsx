import { Search } from 'lucide-react'
import { Input } from '../ui/input'

const SearchInput = () => {
  return (
    <div className="sm:flex items-center relative hidden    ">
      <Search className="absolute ml-2 text-muted-foreground" size={20} />
      <Input
        placeholder="Search"
        className="pl-10 bg-primary/10  w-[350px] md:w-[400px] lg:w-[550px]"
      />
    </div>
  )
}
export default SearchInput
