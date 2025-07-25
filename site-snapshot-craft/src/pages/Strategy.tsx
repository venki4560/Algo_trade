import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Strategy = () => {
  const [activeTab, setActiveTab] = useState("custom");

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Strategy-list</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                Venkatesh
                <div className="w-6 h-6 bg-muted rounded-full"></div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/create-strategy">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Strategy
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-fit grid-cols-3">
            <TabsTrigger value="pre-built">Pre-built</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
            <TabsTrigger value="deployed">Deployed</TabsTrigger>
          </TabsList>

          {/* Search and Filter */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search Strategy"
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Tab Contents */}
        <TabsContent value="pre-built" className="space-y-4">
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-6">
              <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium text-muted-foreground mb-6">
              No Pre-built strategies available
            </h3>
            <Link to="/create-strategy">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Strategy
              </Button>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-6">
              <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium text-muted-foreground mb-6">
              No Custom strategies so far, add strategy
            </h3>
            <Link to="/create-strategy">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Strategy
              </Button>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="deployed" className="space-y-4">
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-6">
              <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium text-muted-foreground mb-6">
              No Deployed strategies yet
            </h3>
            <Link to="/create-strategy">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Strategy
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Strategy;