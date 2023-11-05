import { Link } from "@tanstack/react-router"
import authorColumns from "../columns/author"
import { DataTable } from "../components/data-table"
import { buttonVariants } from "../components/ui/button"
import { cn } from "../lib/utils"

export default function Authors() {
    const books: Author[] = [
        {
            age: 25,
            firstName: "John",
            id: 1,
            lastName: "Doe",
        },
    ]
    return (
        <DataTable columns={authorColumns} data={books}>
            <Link
                to="/add/author"
                className={cn(buttonVariants({ variant: "destructive", size: "sm" }))}
            >
                Add new
            </Link>
        </DataTable>
    )
}
