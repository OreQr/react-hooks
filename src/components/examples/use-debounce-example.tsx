"use client"

import { useMemo, useState } from "react"

import { useDebounce } from "@/hooks/use-debounce"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { users } from "@/components/examples/data"

export default function UseDebounceExample() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 500)

  const filteredUsers = useMemo(() => {
    // Return users early because we don't have anything to filter
    if (!debouncedQuery) return users

    return users.filter((user) =>
      user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    )
  }, [debouncedQuery])

  return (
    <div className="space-y-4">
      <Input
        className="max-w-xs"
        placeholder="Search..."
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="h-0 p-2">Name</TableHead>
            <TableHead className="h-0 p-2">Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.length !== 0 ? (
            filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="p-2 font-medium">{user.name}</TableCell>
                <TableCell className="p-2">{user.email}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} className="h-10 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
