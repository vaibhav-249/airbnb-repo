/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Listing, // @ts-ignore
  Wishlist,
} from "@prisma/client";

export class ListingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ListingCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingCountArgs>
  ): Promise<number> {
    return this.prisma.listing.count(args);
  }

  async listings<T extends Prisma.ListingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingFindManyArgs>
  ): Promise<Listing[]> {
    return this.prisma.listing.findMany(args);
  }
  async listing<T extends Prisma.ListingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingFindUniqueArgs>
  ): Promise<Listing | null> {
    return this.prisma.listing.findUnique(args);
  }
  async createListing<T extends Prisma.ListingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingCreateArgs>
  ): Promise<Listing> {
    return this.prisma.listing.create<T>(args);
  }
  async updateListing<T extends Prisma.ListingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingUpdateArgs>
  ): Promise<Listing> {
    return this.prisma.listing.update<T>(args);
  }
  async deleteListing<T extends Prisma.ListingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ListingDeleteArgs>
  ): Promise<Listing> {
    return this.prisma.listing.delete(args);
  }

  async findWishlists(
    parentId: string,
    args: Prisma.WishlistFindManyArgs
  ): Promise<Wishlist[]> {
    return this.prisma.listing
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .wishlists(args);
  }
}
