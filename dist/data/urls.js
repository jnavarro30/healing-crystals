const urls = [
    "https://www.healingcrystals.com/Amethyst_-_Amethyst_Points_w_Cut_Base__Brazil_.html",
    "https://www.healingcrystals.com/Cut_Pair_Cleoniceras_Ammonite_Fossils__China_.html",
    "https://www.healingcrystals.com/Aquamarine_-_Aquamarine_Chips__Brazil_.html",
    "https://www.healingcrystals.com/Tourmaline_-_Black_Tourmaline_Natural_Rough_Chips_Chunks.html",
    "https://www.healingcrystals.com/Kyanite_-_Blue_Kyanite_Chips_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Blue_Quartz_-_Blue_Quartz_Natural_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Brandberg_Quartz_Points_w_Amethyst__Namibia_.html",
    "https://www.healingcrystals.com/Calcite_-_Amber__Honey__Calcite__Mexico_.html",
    "https://www.healingcrystals.com/Gold_Ferrum_Quartz_Clusters__China_.html",
    "https://www.healingcrystals.com/Citrine_-_Citrine_Natural_Chips_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Powder_-_Natural_Pigment_Powders_Assortment__China_.html",
    "https://www.healingcrystals.com/Epidote_-_Epidote_Chips__Paklstan_.html",
    "https://www.healingcrystals.com/Green_Fluorite_Natural_Chunks.html",
    "https://www.healingcrystals.com/Clear_Quartz_Clusters_W_Yellow_Phantoms__China_.html",
    "https://www.healingcrystals.com/Green_Fluorite_Natural_Chunks.html",
    "https://www.healingcrystals.com/Tourmaline_-_Green_Tourmaline_Chips__Brazil_.html",
    "https://www.healingcrystals.com/Heliodor_-_Heliodor_w_Aquamarine_Chips_Rods__Brazil_.html",
    "https://www.healingcrystals.com/Powder_-_Natural_Pigment_Powders_Assortment__China_.html",
    "https://www.healingcrystals.com/CLEARANCE_-_Hiddenite_Chips__Brazil_.html",
    "https://www.healingcrystals.com/Topaz_-_Imperial_Topaz_Crystal_Chips__Brazil_.html",
    "https://www.healingcrystals.com/Clear_Quartz_-_Inclusion_Quartz_Natural_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/CLEARANCE_-_Hiddenite_Chips__Brazil_.html",
    "https://www.healingcrystals.com/Kyanite_-_Blue_Kyanite_Chips_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Lepidolite_-_Lepidolite_Blades_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Malachite_Polished_Slab.html",
    "https://www.healingcrystals.com/Lepidolite_-_Lepidolite_Blades_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Morganite_-_Morganite_Natural_Chips_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Kyanite_-_Orange_Kyanite_Chips_Chunks__Tanzania_.html",
    "https://www.healingcrystals.com/Petalite_-_Petalite_Crystal_Chips__Brazil_.html",
    "https://www.healingcrystals.com/Fluorite_-_Fluorite_Natural_Octahedron__Fluorescent___China_.html",
    "https://www.healingcrystals.com/Pyrite_Natural_Cubes.html",
    "https://www.healingcrystals.com/Rose_Quartz_-_Rose_Quartz_Natural_Chunks__A___Brazil_.html",
    "https://www.healingcrystals.com/Rutilated_Quartz_-_Rutilated_Quartz_Points__Brazil_.html",
    "https://www.healingcrystals.com/Specimen_-_Smokey_Quartz_Clusters__Himalayan_.html",
    "https://www.healingcrystals.com/Sodalite_-_Sodalite_Chunks___Chips__Brazil_.html",
    "https://www.healingcrystals.com/CLEARANCE_-_Hiddenite_Chips__Brazil_.html",
    "https://www.healingcrystals.com/Tangerine_Quartz_Crystal_Clusters_Twins__Brazil_.html",
    "https://www.healingcrystals.com/Topaz_-_Topaz_Chips_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Tourmaline_-_Black_Tourmaline_Natural_Rough_Chips_Chunks.html",
    "https://www.healingcrystals.com/Calcite_-_Optical_Calcite__Iceland_Spar___China_.html",
    "https://www.healingcrystals.com/Specimen_-_Black_Agate_Rough_Natural_Specimens__India_.html",
    "https://www.healingcrystals.com/Amazonite_-_Amazonite_Natural_Chips_Chunks__Africa_.html",
    "https://www.healingcrystals.com/Pink_Amblygonite_Natural_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Apatite_-_Blue_Apatite_Natural_Chips_Chunks__BRAZIL___PAKISTAN_.html",
    "https://www.healingcrystals.com/Green_Aventurine_-_Green_Aventurine_Natural_Chunks.html",
    "https://www.healingcrystals.com/Kyanite_-_Black_Kyanite_Blades__Brazil_.html",
    "https://www.healingcrystals.com/Calcite_-_Blue_Calcite_Natural_Chunks__Mexico_.html",
    "https://www.healingcrystals.com/Fluorite_-_Fluorite_Natural_Octahedron__Fluorescent___China_.html",
    "https://www.healingcrystals.com/Celestite_-_Celestite_Natural_Chips__Madagascar_.html",
    "https://www.healingcrystals.com/Chrysoprase_-_Chrysoprase_Chips_Chunks__Tanzania_.html",
    "https://www.healingcrystals.com/Powder_-_Natural_Pigment_Powders_Assortment__China_.html",
    "https://www.healingcrystals.com/Sunstone_Natural_Chips_Chunks__Tanzania_.html",
    "https://www.healingcrystals.com/Fuchsite_-_Fuchsite_Natural_Chips_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Galena_Natural_Chunks__Tanzania_.html",
    "https://www.healingcrystals.com/Garnet_-_Garnet_Natural_Nuggets__Pakistan_.html",
    "https://www.healingcrystals.com/Golden_Beryl_Chips__Brazil_.html",
    "https://www.healingcrystals.com/Golden_Tiger_Eye_-_Golden_Tiger_Eye_Natural_Chips_Chunks.html",
    "https://www.healingcrystals.com/Agate_-_Grape_Agate.html",
    "https://www.healingcrystals.com/Calcite_-_Green_Calcite_Chips___Chunks__Mexico_.html",
    "https://www.healingcrystals.com/Chrome_Diopside_-_Chrome_Diopside_Chips_Chunks__Pakistan_.html",
    "https://www.healingcrystals.com/Green_Quartz_-_Green_Quartz_Natural_Chips_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Herkimer_Diamonds_-_Bag_of_Pieces__New_York_.html",
    "https://www.healingcrystals.com/Calcite_-_Amber__Honey__Calcite__Mexico_.html",
    "https://www.healingcrystals.com/Howlite_-_Howlite_Chunks__China_.html",
    "https://www.healingcrystals.com/Red_Jasper_-_Red_Jasper_Natural_Chips_Chunks__Brazil_.html",
    "https://www.healingcrystals.com/Natural_Jet_Chips_Chunks__Russia_.html",
    "https://www.healingcrystals.com/Lemurian_Quartz_-_Lemurian_Seed_Crystals__Brazil_.html",
    "https://www.healingcrystals.com/Zoned_Bicolor_Mica_with_Lepidolite__Mica_w_Lithium_.html",
    "https://www.healingcrystals.com/Calcite_-_Optical_Calcite__Iceland_Spar___China_.html",
    "https://www.healingcrystals.com/Calcite_-_Orange_Calcite_Natural_Chunks__Mexico___Canada_.html",
    "https://www.healingcrystals.com/Tourmaline_-_Pink_Tourmaline_Chips__Brazil_.html",
    "https://www.healingcrystals.com/Ruby_-_Ruby_Natural__Rock_Ruby__Chips__India_.html",
    "https://www.healingcrystals.com/Golden_Rutile_Needles_on_Hematite__Brazil_.html",
    "https://www.healingcrystals.com/Scolecite_-_Scolecite_Rods__India_.html",
    "https://www.healingcrystals.com/Selenite_-_Natural_Selenite_Rods__Morocco_.html",
    "https://www.healingcrystals.com/Stibnite_Rods__China_.html",
    "https://www.healingcrystals.com/Stilbite_-_Stilbite_Clusters__India_.html",
    "https://www.healingcrystals.com/Natural_Tourmalated_Quartz__Tanzania_.html",
    "https://www.healingcrystals.com/Zircon_Natural_Chips__Brazil_.html",
];
export default urls;
//# sourceMappingURL=urls.js.map